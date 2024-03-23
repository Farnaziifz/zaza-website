interface HTMLElementWithClickOutsideEvent extends HTMLElement {
  clickOutsideEvent?: (event: MouseEvent) => void
}

const VOnClickOutside = {
  mounted: function (
    element: HTMLElement,
    binding: {
      arg: string
      value: (event: MouseEvent, element: HTMLElement) => void
    }
  ) {
    element.clickOutsideEvent = function (event: MouseEvent) {
      const excludeComponent = document.getElementById(binding.arg)

      if (
        !(element == event.target || element.contains(event.target as Node)) &&
        !(
          excludeComponent &&
          (event.target == excludeComponent ||
            excludeComponent.contains(event.target as Node))
        )
      ) {
        binding.value(event, element)
      }
    }
    document.addEventListener('click', element.clickOutsideEvent)
  },
  unmounted: function (element: HTMLElement) {
    document.removeEventListener('click', element.clickOutsideEvent)
  },
}

export default VOnClickOutside
