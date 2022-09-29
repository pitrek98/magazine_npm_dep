<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                    Stwórz przedmiot
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Tworzenie przedmiotu
                </v-card-title>

                <v-card-text>
                    {{item}}
                    <div class="my-2">
                        <v-text-field label="Nazwa" outlined v-model="item.name"></v-text-field>
                    </div>
                    <div class="my-2">
                        <v-text-field label="Cena" outlined v-model="item.price"></v-text-field>
                    </div>
                    <div class="my-2">
                        <v-text-field label="Kategoria" outlined v-model="item.category"></v-text-field>
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        Stwórz
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
console.log(1);
import store from '../../store/index';

export default {
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        item() {
            return store.getters.getItem;
        }
    }
}
</script>
