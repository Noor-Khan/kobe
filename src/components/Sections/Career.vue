<template>
  <section id="career">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <img src="../../assets/images/career.png" alt class="img-fluid" />
        </v-col>
        <v-col cols="12" md="6">
          <div class="career-right text-left">
            <div class="fade-heading text-uppercase">
              <h2>career</h2>
            </div>
            <div class="horizontal-info">
              <p>1996 - 2016</p>
            </div>
            <div class="main-heading text-uppercase">
              <h3>professional career</h3>
            </div>
            <div class="main-para">
              <p>
                Kobe Bryant was an American professional basketball player.A shooting guard, Bryant entered the
                <a
                  href="#"
                >National Basketball Association</a>
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <div class="career-table">
            <v-data-table :headers="headers" :items="desserts">
              <template v-slot:item.name="props">
                <v-edit-dialog
                  :return-value.sync="props.item.name"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.name }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.name"
                      :rules="[max25chars]"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.iron="props">
                <v-edit-dialog
                  :return-value.sync="props.item.iron"
                  large
                  persistent
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  <div>{{ props.item.iron }}</div>
                  <template v-slot:input>
                    <div class="mt-4 title">Update Iron</div>
                  </template>
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.iron"
                      :rules="[max25chars]"
                      label="Edit"
                      single-line
                      counter
                      autofocus
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
            </v-data-table>

            <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
              {{ snackText }}
              <v-btn text @click="snack = false">Close</v-btn>
            </v-snackbar>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      snack: false,
      snackColor: "",
      snackText: "",
      max25chars: v => v.length <= 25 || "Input too long!",
      pagination: {},
      headers: [
        {
          text: "Year",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Team", value: "calories" },
        { text: "mpg", value: "fat" },
        { text: "Fg%", value: "carbs" },
        { text: "3p%", value: "protein" },
        { text: "ft%", value: "iron" },
        { text: "ppg%", value: "iron" },
        { text: "rpg%", value: "iron" },
        { text: "apg%", value: "iron" },
        { text: "bpg%", value: "iron" }
      ],
      desserts: [
        {
          name: "2020",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "2019",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "2018",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "2017",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "2016",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "2015",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "2014",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "2013",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "2012",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "2011",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        },
        {
          name: "2010",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  methods: {
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      // console.log("Dialog closed");
    }
  }
};
</script>
<style lang="scss">
#career {
  padding: 50px 0;
  background-color: #fbfbfb;
  .career-right {
    .horizontal-info {
      &::after {
        left: 6.7rem;
      }
    }
  }
  .career-table {
    position: relative;
    margin-top: -13rem;
  }
  .theme--light {
    .v-data-table-header {
      background-color: rgba(242, 185, 35, 0.7);
      text-transform: uppercase;
      font-weight: 800;
    }
    &.v-data-table {
      background-color: #ffffffde;
    }
  }
}
</style>