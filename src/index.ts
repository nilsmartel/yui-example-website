import animate, {lerp, Interpolation} from 'yuiAnimations'
const {Root, Quadratic, Ease} = Interpolation

const log = console.log

log('starting')

animate('animation-headline', async (factor: number) => {
    const opacity = factor

    const size = lerp(16, 32, factor)

    document.getElementById('subtitle').style.opacity = String(opacity)
    document.getElementById('subtitle').style.fontSize = String(size) + 'pt'
})

animate('animation-subtitle2', async (factor: number) => {
    const opacity = factor
    document.getElementById('subtitle2').style.opacity = String(opacity)
})

animate('animation-page2-1', async (factor: number) => {
    const offset = lerp(192, 32, factor) + 'px'
    const opacity = String(factor)

    const page2 = document.getElementById('page2')!
    page2.style.paddingTop = offset

    const text = page2.getElementsByClassName('text-mid')[0]
    // @ts-ignore
    text.style.opacity = opacity
})

animate("animation-page2-rocket", async (factor: number) => {
    const rocket = document.getElementById('rocket')
    
    const size = lerp(192, 48, factor) + 'pt'
    const left = lerp(-100, 0, factor) + '%'

    const blur = lerp(
        10,
        0,
        Root(Root(factor))
    ) + 'px'

    rocket.style.fontSize = size
    rocket.style.left = left

    rocket.style.filter = `blur(${blur})`
})

animate("animation-page3-show-map", async (factor: number) => {
    const rect = document.getElementById('rect')
    const height = lerp(0, 256, factor) + 'px'

    rect.style.height = height
})