import style from './index.module.scss'

type spriteType = {
  typeStr: string
  name: string
}

const styles = {
  grass: {
    borderColor: '#b4f000',
    backgroundColor: '#92bf19',
    WebkitBoxShadow: '0 0 .25em .03em #92bf19',
    boxShadow: '0 0 .25em .03em #92bf19',
  },
  poison: {
    borderColor: '#d28cd2',
    backgroundColor: '#be78be',
    WebkitBoxShadow: '0 0 .25em .03em #be78be',
    boxShadow: '0 0 .25em .03em #be78be',
  },
  fire: {
    borderColor: '#ff6900',
    backgroundColor: '#ff3700',
    WebkitBoxShadow: '0 0 .25em .03em #ff3700',
    boxShadow: '0 0 .25em .03em #ff3700',
  },
  flying: {
    borderColor: '#78dcff',
    backgroundColor: '#79bcd7',
    WebkitBoxShadow: '0 0 .25em .03em #79bcd7',
    boxShadow: '0 0 .25em .03em #79bcd7',
  },
  water: {
    borderColor: '#14b9ff',
    backgroundColor: '#0094e5',
    WebkitBoxShadow: '0 0 .25em .03em #0094e5',
    boxShadow: '0 0 .25em .03em #0094e5',
  },
  bug: {
    borderColor: '#46c846',
    backgroundColor: '#32b432',
    WebkitBoxShadow: '0 0 .25em .03em #32b432',
    boxShadow: '0 0 .25em .03em #32b432',
  },
  normal: {
    borderColor: '#dcdcdc',
    backgroundColor: '#a0a0a0',
    WebkitBoxShadow: '0 0 .25em .03em #a0a0a0',
    boxShadow: '0 0 .25em .03em #a0a0a0',
  },
  dark: {
    borderColor: '#787878',
    backgroundColor: '#646464',
    WebkitBoxShadow: '0 0 .25em .03em #646464',
    boxShadow: '0 0 .25em .03em #646464',
  },
  electric: {
    borderColor: '#ffe100',
    backgroundColor: '#e4b700',
    WebkitBoxShadow: '0 0 .25em .03em #e4b700',
    boxShadow: '0 0 .25em .03em #e4b700',
  },
  psychic: {
    borderColor: '#f08cdc',
    backgroundColor: '#dc78c8',
    WebkitBoxShadow: '0 0 .25em .03em #dc78c8',
    boxShadow: '0 0 .25em .03em #dc78c8',
  },
  ground: {
    borderColor: '#fac85a',
    backgroundColor: '#cca142',
    WebkitBoxShadow: '0 0 .25em .03em #cca142',
    boxShadow: '0 0 .25em .03em #cca142',
  },
  ice: {
    borderColor: '#14f5ff',
    backgroundColor: '#00b7ee',
    WebkitBoxShadow: '0 0 .25em .03em #00b7ee',
    boxShadow: '0 0 .25em .03em #00b7ee',
  },
  steel: {
    borderColor: '#aac8f0',
    backgroundColor: '#96b4dc',
    WebkitBoxShadow: '0 0 .25em .03em #96b4dc',
    boxShadow: '0 0 .25em .03em #96b4dc',
  },
  fighting: {
    borderColor: '#dc6900',
    backgroundColor: '#c85500',
    WebkitBoxShadow: '0 0 .25em .03em #c85500',
    boxShadow: '0 0 .25em .03em #c85500',
  },
  rock: {
    borderColor: '#b48c64',
    backgroundColor: '#a07850',
    WebkitBoxShadow: '0 0 .25em .03em #a07850',
    boxShadow: '0 0 .25em .03em #a07850',
  },
  ghost: {
    borderColor: '#a08cff',
    backgroundColor: '#8c78f0',
    WebkitBoxShadow: '0 0 .25em .03em #8c78f0',
    boxShadow: '0 0 .25em .03em #8c78f0',
  },
  dragon: {
    borderColor: '#5078dc',
    backgroundColor: '#3c64c8',
    WebkitBoxShadow: '0 0 .25em .03em #3c64c8',
    boxShadow: '0 0 .25em .03em #3c64c8',
  },
}

const Type = ({ typeStr, name }: spriteType) => {
  const getTypeStyle = (type: string) => {
    if ('grass' === type) {
      return styles.grass
    }
    if ('poison' === type) {
      return styles.poison
    }
    if ('fire' === type) {
      return styles.fire
    }
    if ('flying' === type) {
      return styles.flying
    }
    if ('water' === type) {
      return styles.water
    }
    if ('bug' === type) {
      return styles.bug
    }
    if ('normal' === type) {
      return styles.normal
    }
    if ('dark' === type) {
      return styles.dark
    }
    if ('electric' === type) {
      return styles.electric
    }
    if ('psychic' === type) {
      return styles.psychic
    }
    if ('ground' === type) {
      return styles.ground
    }
    if ('ice' === type) {
      return styles.ground
    }
    if ('ground' === type) {
      return styles.ground
    }
    if ('fighting' === type) {
      return styles.ground
    }
    if ('rock' === type) {
      return styles.ground
    }
    if ('ghost' === type) {
      return styles.ground
    }
    if ('dragon' === type) {
      return styles.ground
    }
    return undefined
  }
  return (
    <>
      <div className={`${style.type_box}`} style={getTypeStyle(typeStr)}>
        <span>{name}</span>
      </div>
    </>
  )
}

export default Type
