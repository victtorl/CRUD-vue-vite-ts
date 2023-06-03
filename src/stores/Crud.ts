import { defineStore, acceptHMRUpdate, type Store, type StoreDefinition } from "pinia";
import { computed, ref, type Ref } from "vue";
import { looseIndexOf } from "@vue/shared";

export const useCrudStore :StoreDefinition =defineStore("crudstore",() => {
    const itemscrud=ref([] as Array<{}|null>)

    function additemcrud(item:object){
        itemscrud.value = itemscrud.value.concat(item);
    }
    
    function deleteitemcrud(index: number) {
         const newArr= itemscrud.value.filter(u=>looseIndexOf(itemscrud.value,u)!=index)
         itemscrud.value=newArr
      }

    return{
        additemcrud,
        deleteitemcrud,
        itemscrud
    }
})
