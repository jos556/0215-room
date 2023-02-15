import { defineCustomElement } from "vue";
import Mycustomelement from "./elements/Mycustomelement.ce.vue"

window.customElements.define("my-ce",defineCustomElement(Mycustomelement))
