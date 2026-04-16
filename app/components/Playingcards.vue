<template>
  <div id="frame">
    <div id="table" ref="tableRef">
      <div class="card card--sample">
        <span class="card__symbol card__symbol--heart">♣</span>
      </div>
    </div>
  </div>

</template>
<style lang="css">
:root {
  --table-color: transparent;
  --card-red: #e74c3c;
  --card-black: #333;
  --card-width: 75px;
  --card-height: 112px;
  --card-symbol-size: 40px;
}

@media (min-width: 768px) {
  #table {
    --card-width: 100px;
    --card-height: 150px;
    --card-symbol-size: 60px;
  }
}

#frame {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  perspective: 800px;
  transform-style: preserve-3d;
  overflow: hidden;
}

#table {
  position: relative;
  width: 90%;
  height: 90%;
  perspective: 1200px;
  transform: rotateY(-1deg) rotateX(40deg);
  background: var(--table-color);
  box-shadow: 0 0 100px 100px var(--table-color);
}

#table .card {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--card-width);
  height: var(--card-height);
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 1px 1px 5px 1px rgba(150, 150, 150, 0.15);
}

#table .card__symbol {
  font-size: var(--card-symbol-size);
  color: var(--card-black);
  user-select: none;
}

#table .card__symbol--red {
  color: var(--card-red);
}

#table .card--sample {
  top: 40%;
  left: 45%;
  transform: rotate(45deg);
}
</style>
<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'
import {gsap} from 'gsap'

const symbols = ["♣", "♠", "♥", "♦"]
const tableRef = ref<HTMLElement | null>(null)
let cardWidth = 100
let cardHeight = 150
let cardCount = 1
let startingHands = 0
let ctx: gsap.Context | null = null

function getRandom(min: number, max: number | null = null) {
  const realMax = max === null ? min * 2 : max
  return min + Math.random() * (realMax - min)
}

function getRandomSymbol(): string {
  const idx = Math.floor(Math.random() * symbols.length)
  return symbols[idx]!
}


function addCard(table: HTMLElement) {
  const card = document.createElement('div')
  card.className = 'card'
  const span = document.createElement('span')
  span.className = 'card__symbol' + (Math.random() >= 0.5 ? ' card__symbol--red' : '')
  span.appendChild(document.createTextNode(getRandomSymbol()))
  card.appendChild(span)
  table.appendChild(card)
  return card
}

function getTableCenter(table: HTMLElement) {
  return {
    x: (table.offsetLeft + table.offsetWidth / 2) - (cardWidth / 2),
    y: (table.offsetTop + table.offsetHeight / 2) - (cardHeight / 2),
  }
}

function draw() {
  const table = tableRef.value
  if (!table) return

  const tl = gsap.timeline()
  const position = getTableCenter(table)
  const card = addCard(table)

  cardCount++

  gsap.set(card, {
    y: -table.offsetHeight,
    x: table.offsetWidth / 2,
    zIndex: cardCount,
  })

  const offsetX = table.offsetWidth * 0.5
  const offsetY = table.offsetHeight * 0.5

  tl.addLabel('start')
      .to(card, {
        duration: 1.5,
        ease: 'power2.out',
        x: position.x + getRandom(-offsetX, offsetX),
        y: position.y + getRandom(-offsetY, offsetY),
      }, 'start')
      .to(card, {
        duration: 1.4,
        ease: 'power2.out',
        rotation: getRandom(360),
      }, 'start')
}

function startSequence() {
  if (startingHands < 3) {
    startingHands++
    draw()
    setTimeout(startSequence, 1000)
  }
}

function onClick() {
  draw()
}

onMounted(() => {
  const table = tableRef.value
  if (!table) return

  // Scope all GSAP effects to this component so we can kill them on unmount.
  ctx = gsap.context(() => {
    // initial draws
    startSequence()

    // add click listener
    window.addEventListener('click', onClick)
  }, table)
})

onUnmounted(() => {
  window.removeEventListener('click', onClick)
  ctx?.revert()
  ctx = null
})
</script>