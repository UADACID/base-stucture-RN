const mutationState = ({texts, activeIndex}) => {
  const changeActiveIndexInsideArray = texts.map((obj, i) => {
      if (i != activeIndex) {
        obj= {...obj, isActive : false}
      }else {
        obj= {...obj, isActive : true}
      }
      return obj
    })
  const newState = {
    activeIndex : activeIndex,
    texts : changeActiveIndexInsideArray
  }

  return newState
}

const customMutationState = ({texts, activeIndex, key, value}) => {
  const changeArrayTexts = texts.map((obj, i) => {
    if (i != activeIndex) {
      obj= {...obj}
    }else {
      obj= {...obj, [key]:value}
    }
    return obj
  })
  const newState = {
    activeIndex,
    texts : changeArrayTexts
  }

  return newState
}

export {
  customMutationState,
  mutationState
}
