import Vue from 'vue'

Vue.directive('swap-color', function( el, binding) {
    let contactType = binding.value

    const colors = {
        1: '#8843ae',
        2: '#26c9cf'
    }

    el.style.backgroundColor = colors[contactType] || '#8843ae'
    
  }
)