import { mount, createLocalVue } from "@vue/test-utils";
import BootstrapVue, {
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
} from "bootstrap-vue";
import Formulario from "@/components/Formulario.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("Tests de formulario", () => {
  const wrapper = mount(Formulario, {
    localVue,
    computed: {
      pokemon: () => {
        return {
          pokeNombre: "",
          selected: null,
          options: [
            { value: null, text: "Por favor, seleccione un Entrenador" },
            { value: "/EntrenadoraRomina", text: "EntrenadoraRomina" },
            { value: "/EntrenadorMiguel", text: "EntrenadorMiguel" },
            { value: "/EntrenadorLuis", text: "EntrenadorLuis" },
            { value: "/EntrenadoraDaniela", text: "EntrenadoraDaniela" },
            { value: "/EntrenadorAndres", text: "EntrenadorAndres" },
            { value: "/EntrenadorJose", text: "EntrenadorJose" },
            { value: "/EntrenadorEdgar", text: "EntrenadorEdgar" },
          ],
          pokeImagen: "",
          pokeDatos: "",
          move: "",
          altura: "",
          peso: "",
          habilidad: "",
        };
      },
      armarURLPokemon: () => {
        return {
          urlArmada: "",
        };
      },
    },
    methods: {
      buscarPokemonApi: () => {
        return {};
      },
      agregarPokeAction: () => {
        return [];
      },
    },
  });
  it("se renderiza el formulario", () => {
    expect(
      wrapper.findComponent(BButton, BForm, BFormGroup, BFormInput).exists()
    ).toBe(true);
  });
  it("esta la palabra AtrapaloYa", () => {
    expect(wrapper.findComponent(BButton).text()).toEqual("Atrapalo ya!");
  });
});
