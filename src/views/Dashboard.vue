<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
    <!-- Dummy Cards -->
    <MazCard 
      v-for="(card, index) in cards" 
      :key="index" 
      class="p-2 shadow-lg border border-gray-200 rounded-xl bg-white border-2"
    >
      <div class="flex items-center gap-4">
        <!-- Circular Progress Bar -->
        <MazCircularProgressBar 
          :percentage="card.percentage" 
          :duration="5000"  
          size="3em"
          class="text-sm text-blue-500"
        />

        <!-- Stats Section -->
        <div>
          <h3 class="text-xl font-bold text-gray-900">{{ card.value }}</h3>
          <span class="text-base text-gray-600">{{ card.label }}</span>
        </div>
      </div>
    </MazCard>
  </div>
  <div class="bg-white p-4 rounded-md mt-4">

    <MazTable
      size="sm"
      v-model="selectedIds"
      v-model:search-query="searchQuery"
      v-model:page="page"
      v-model:page-size="pageSize"
      search
      pagination
      color="secondary"
      sortable
      selectable
      hoverable
      background-even
      selected-key="id"
      :headers="[
        { label:'#', key: 'index', align: 'center', width: '2rem', sortable: false },
        { label:'Name', key: 'name' },
        { label: 'Code', key: 'code', align: 'center'  },
        { label: 'Type', key: 'type' },
        { label: 'Area', key: 'areaName', align: 'center', classes: 'maz-font-bold' },
      ]"
      :rows="competitions"
    >
      <template #cell-index="{ value }">
        <span class="maz-text-base">{{value}}</span>
      </template>
      <template #cell-name="{ row, value }">
        <div class="maz-flex maz-items-center maz-gap-2">
          <MazAvatar :src="row.logoUrl" size="0.5rem"></MazAvatar>
          <span>{{value}}</span>
        </div>
      </template>
      <template #cell-type="{ value }">
        <MazBadge :color="value === 'CUP' ? 'primary' : 'secondary'">{{value}}</MazBadge>
      </template>
  
      <template #actions>
        <!-- <MazBtn fab size="xs" color="danger" icon="TrashIcon" /> -->
        <TrashIcon class="h-6 w-6 text-white bg-red-500 p-1 rounded-full" />

      </template>
    </MazTable>
  </div>
</template>

<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline';
const cards = [
  { percentage: 75, value: "1,378", label: "Total Return" },
  { percentage: 65, value: "2,459", label: "New Orders" },
  { percentage: 92, value: "1,120", label: "Active Users" },
  { percentage: 80, value: "334", label: "Customer " },
];

import MazTable from 'maz-ui/components/MazTable'
import { ref } from 'vue';
const pageSize = ref(5); 
const competitions = [
{
  id: '0262672d-7c7a-4d30-866e-edb88b5a5336',
  name: 'UEFA Champions League',
  code: 'CL',
  type: 'CUP',
  areaName: 'Europe',
  matchday: 6,
  logoUrl: 'https://crests.football-data.org/CL.png',
  groups: 1,
  index: 1,
},
{
  id: '08d15e97-a319-4772-9b82-f1877369b40f',
  name: 'Premier League',
  code: 'PL',
  type: 'LEAGUE',
  areaName: 'England',
  matchday: 18,
  logoUrl: 'https://crests.football-data.org/PL.png',
  groups: 1,
  index: 2,
},
{
  id: '17e62396-bbcb-42f5-acff-caed11534976',
  name: 'Serie A',
  code: 'SA',
  type: 'LEAGUE',
  areaName: 'Italy',
  matchday: 17,
  logoUrl: 'https://crests.football-data.org/SA.png',
  groups: 0,
  index: 3,
},
{
  id: '3726264e-ba3a-4a9f-b4a4-8fc33e12747c',
  name: 'FIFA World Cup',
  code: 'WC',
  type: 'CUP',
  areaName: 'World',
  matchday: 8,
  logoUrl: 'https://crests.football-data.org/qatar.png',
  groups: 1,
  index: 4,
},
{
  id: '555dc3f4-e592-46af-b634-59f07a201f2e',
  name: 'Primeira Liga',
  code: 'PPL',
  type: 'LEAGUE',
  areaName: 'Portugal',
  matchday: 15,
  logoUrl: 'https://crests.football-data.org/PPL.png',
  groups: 0,
  index: 5,
},
{
  id: '59bbdfa0-86d8-4a74-b701-435747c55a42',
  name: 'Primera Division',
  code: 'PD',
  type: 'LEAGUE',
  areaName: 'Spain',
  matchday: 18,
  logoUrl: 'https://crests.football-data.org/PD.png',
  groups: 1,
  index: 6,
},
{
  id: '6ae53332-3d27-4781-912d-d9c4e69657f9',
  name: 'Ligue 1',
  code: 'FL1',
  type: 'LEAGUE',
  areaName: 'France',
  matchday: 17,
  logoUrl: 'https://crests.football-data.org/FL1.png',
  groups: 4,
  index: 7,
},
{
  id: '747c79ee-89c8-436a-b0ea-53f05f180007',
  name: 'European Championship',
  code: 'EC',
  type: 'CUP',
  areaName: 'Europe',
  matchday: 1,
  logoUrl: 'https://crests.football-data.org/EUR.svg',
  groups: 1,
  index: 8,
},
{
  id: '7a32d897-6b22-4212-8ffe-049ae912c346',
  name: 'Eredivisie',
  code: 'DED',
  type: 'LEAGUE',
  areaName: 'Netherlands',
  matchday: 18,
  logoUrl: 'https://crests.football-data.org/ED.png',
  groups: 0,
  index: 9,
},
{
  id: 'ab57e2dc-272c-45e6-b13e-57617a13b753',
  name: 'Championship',
  code: 'ELC',
  type: 'LEAGUE',
  areaName: 'England',
  matchday: 23,
  logoUrl: 'https://crests.football-data.org/ELC.png',
  groups: 0,
  index: 10,
},
{
  id: 'b84e3295-7315-46c7-b979-6d9d784e5460',
  name: 'Campeonato Brasileiro Série A',
  code: 'BSA',
  type: 'LEAGUE',
  areaName: 'Brazil',
  matchday: 38,
  logoUrl: 'https://crests.football-data.org/764.svg',
  groups: 0,
  index: 11,
},
{
  id: 'cafad3ce-1783-4652-9248-4bcad024dd98',
  name: 'Copa Libertadores',
  code: 'CLI',
  type: 'CUP',
  areaName: 'South America',
  matchday: 11,
  logoUrl: 'https://crests.football-data.org/CLI.svg',
  groups: 0,
  index: 12,
},
{
  id: 'ed945bea-9a58-450a-8d62-7baa7722b5e7',
  name: 'Bundesliga',
  code: 'BL1',
  type: 'LEAGUE',
  areaName: 'Germany',
  matchday: 16,
  logoUrl: 'https://crests.football-data.org/BL1.png',
  groups: 0,
  index: 13,
},
]

</script>
