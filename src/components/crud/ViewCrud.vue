<template>
  <div class="flex flex-col justify-star items-center mt-10">
    <p class="text-lg my-4 font-medium leading-6 text-blue-900">Toodo list products</p>
    <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
        <div class="mt-2">
          <input type="name" autocomplete="off" v-model="name" name="name" id="name" class="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="name" />
        </div>
      </div>

      <div>
        <label for="number" class="block text-sm font-medium leading-6 text-gray-900">Precio</label>
        <div class="mt-2">
          <input type="number" @keyup.enter="agregaItem({name:name,price:price})" v-model="price" name="number" id="number" class="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="S/." />
        </div>
      </div>

      <button type="button" @click="agregaItem({name:name,price:price})" class=" my-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Agregar Item</button>



    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 w-36 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                <th scope="col" class="px-3   w-36 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="item in items" :key="item.id">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ item.name }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item.price }}</td>
                <td @click="deleteItem(looseIndexOf(items,item))" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Delete item</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { looseIndexOf } from '@vue/shared';
import { ref } from 'vue';

import {useCrudStore} from '../../stores/Crud'

const name=ref('')
const price=ref(null)

interface itemItfz{
  id:number,
  name:string,
  price:number
}

const crudstore=useCrudStore()
const items =ref([]as Array<itemItfz>)



const agregaItem=(item:any) => {
      crudstore.additemcrud(item)
      items.value=crudstore.itemscrud
      name.value=''
      price.value=null
      
}

const deleteItem=(id:number)=>{
      crudstore.deleteitemcrud(id)
      items.value=crudstore.itemscrud
}


</script>


