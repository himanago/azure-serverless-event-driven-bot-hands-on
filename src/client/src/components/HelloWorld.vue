<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">名前</th>
            <th class="text-left">時刻</th>
            <th class="text-left">内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in timecardData" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ dateToString(item._ts) }}</td>
            <td>{{ item.message }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
  import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
  
  export default {
    name: 'HelloWorld',
    data: () => ({
      timecardData: []
    }),
    created: async function() {
      const now = new Date();
      const begin = Date.UTC(now.getFullYear(), now.getMonth(), 1) / 1000;
      const end = Date.UTC(now.getFullYear(), now.getMonth() + 1, 1) / 1000;
      const res = await fetch(`/api/getTimecardData/${begin}/${end}`);
      if (res.ok) {
        this.timecardData = await res.json();
      }

      // SignalR
      const connection = new HubConnectionBuilder()
        .withUrl('/api')
        .configureLogging(LogLevel.Information)
        .build();

      connection.on('newData', async (message) => {
        this.timecardData.push(message);
      });

      const start = async () => {
        try {
          await connection.start();
          console.log("connected");
        } catch (err) {
          console.log(err);
          setTimeout(() => start(), 5000);
        }
      }

      connection.onclose(async () => {
        await start();
      });

      start();
    },
    methods: {
      dateToString: function(unixtime) {
        const date = new Date(unixtime * 1000);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`; 
      }
    }
  }
</script>
