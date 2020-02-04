<template>
  <section id="career">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="career-img">
            <img src="../../assets/images/career.png" alt class="img-fluid" />
          </div>
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
                Bryant entered the
                <a href="#">National Basketball Association</a>
                directly from high school, and played his entire 20-season professional career in the league with the Los Angeles Lakers.
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
        { text: "Team", value: "team" },
        { text: "gp", value: "gp" },
        { text: "gs", value: "gs" },
        { text: "mpg", value: "mpg" },
        { text: "Fg%", value: "fg" },
        { text: "3p%", value: "threep" },
        { text: "ft%", value: "ft" },
        { text: "rpg%", value: "rpg" },
        { text: "apg%", value: "apg" },
        { text: "spg%", value: "spg" },
        { text: "bpg%", value: "bpg" },
        { text: "ppg%", value: "ppg" }
      ],
      desserts: [
        {
          name: "2015-2016",
          team: "L.A. Lakers",
          gp: 66,
          gs: 66,
          mpg: 28.2,
          fg: 0.358,
          threep: 0.285,
          ft: 0.826,
          rpg: 3.7,
          apg: 2.8,
          spg: 0.9,
          bpg: 0.2,
          ppg: 17.6
        },
        {
          name: "2014-2015",
          team: "L.A. Lakers",
          gp: 35,
          gs: 35,
          mpg: 34.5,
          fg: 0.373,
          threep: 0.293,
          ft: 0.813,
          rpg: 5.7,
          apg: 5.6,
          spg: 1.3,
          bpg: 0.2,
          ppg: 22.3
        },
        {
          name: "2013-2014",
          team: "L.A. Lakers",
          gp: 6,
          gs: 6,
          mpg: 29.5,
          fg: 0.425,
          threep: 0.188,
          ft: 0.857,
          rpg: 4.3,
          apg: 6.3,
          spg: 1.2,
          bpg: 0.2,
          ppg: 13.8
        },
        {
          name: "2012-2013",
          team: "L.A. Lakers",
          gp: 78,
          gs: 78,
          mpg: 38.6,
          fg: 0.463,
          threep: 0.324,
          ft: 0.839,
          rpg: 5.6,
          apg: 6.0,
          spg: 1.4,
          bpg: 0.3,
          ppg: 27.3
        },
        {
          name: "2011-2012",
          team: "L.A. Lakers",
          gp: 58,
          gs: 58,
          mpg: 38.5,
          fg: 0.43,
          threep: 0.303,
          ft: 0.845,
          rpg: 5.4,
          apg: 4.6,
          spg: 1.2,
          bpg: 0.3,
          ppg: 27.9
        },
        {
          name: "2010-2011",
          team: "L.A. Lakers",
          gp: 82,
          gs: 82,
          mpg: 33.9,
          fg: 0.451,
          threep: 0.323,
          ft: 0.828,
          rpg: 5.1,
          apg: 4.7,
          spg: 1.2,
          bpg: 0.1,
          ppg: 25.3
        },
        {
          name: "2009-2010",
          team: "L.A. Lakers",
          gp: 73,
          gs: 73,
          mpg: 38.8,
          fg: 0.456,
          threep: 0.329,
          ft: 0.811,
          rpg: 5.4,
          apg: 5.0,
          spg: 1.5,
          bpg: 0.3,
          ppg: 27.0
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
  .career-img {
    img {
      border-bottom: 5px solid #efefef;
    }
  }
  .career-right {
    .horizontal-info {
      &::after {
        left: 6.7rem;
      }
    }
  }
  .career-table {
    position: relative;
    margin-top: -20%;
  }
  .theme--light {
    .v-data-table-header {
      background-color: rgba(242, 185, 35, 0.7);
      text-transform: uppercase;
      font-weight: 800;
    }
    .v-data-footer {
      display: none;
    }
    &.v-data-table {
      background-color: #ffffffde;
    }
  }
}
</style>