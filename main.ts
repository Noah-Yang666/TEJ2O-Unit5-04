/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah Yang
 * Created on: March 4
 * This program operates traffic lights
*/

// the variables 
let myNeopixelStrip: neopixel.Strip = null

// setting up the lights
basic.clearScreen()
myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.show()
basic.showIcon(IconNames.Happy)

// running the traffic lights
basic.clearScreen()
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)

    // turning on green traffic light
    myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    myNeopixelStrip.show()
    basic.pause(2000)

    // turning off green traffic light
    myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.show()

    // turning on yellow light
    myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    myNeopixelStrip.show()
    basic.pause(2000)

    // turning off yellow light
    myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.show()

    // turning on red light
    myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    myNeopixelStrip.show()
    basic.pause(2000)

    // turning off red light
    myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})

// resetting the traffic lights
basic.clearScreen()
input.onButtonPressed(Button.B, function () {
myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.show()
basic.showIcon(IconNames.Happy)
})
