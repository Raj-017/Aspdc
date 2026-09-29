# IRArray

Arduino library for reading the AlphaBot2's 5-sensor line tracking IR array through its onboard TLC1543 ADC.

## Why this library exists

The AlphaBot2's five line-tracking IR sensors are not wired to any Arduino pin directly. They are wired to a TLC1543 external ADC chip, which the Arduino talks to over its own 4-wire protocol, not through `analogRead()`. This library handles that protocol for you, including the TLC1543's pipelined behaviour (it always returns the previous channel's result, not the one you just asked for), so you get five clean, ready-to-use sensor values with one function call.

## Hardware

| Signal | Arduino Pin |
|--------|-------------|
| CS     | D10         |
| DOUT   | D11         |
| ADDR   | D12         |
| CLK    | D13         |

| TLC1543 Channel | Sensor |
|------------------|--------|
| A0 | IR1 |
| A1 | IR2 |
| A2 | IR3 |
| A3 | IR4 |
| A4 | IR5 |

These pins are fixed by the AlphaBot2's hardware design and should not be reassigned or used for anything else.

## Installation

1. Download or copy this `IRArray` folder into your Arduino `libraries` folder (usually `Documents/Arduino/libraries/` on Windows/Mac, or `~/Arduino/libraries/` on Linux)
2. Restart the Arduino IDE
3. Go to **File > Examples > IRArray > IRArray_BasicRead** to open the example sketch

## API Reference

### `IRArray()`

Creates the IR array object. No arguments, pins are fixed to the AlphaBot2's hardware wiring.

```cpp
IRArray ir;
```

### `begin()`

Sets up the pin modes for the TLC1543 interface. Call once in `setup()`.

```cpp
ir.begin();
```

### `read(unsigned int *sensorValues)`

Reads all five sensors and fills the array you pass in with their values, in order: `sensorValues[0]` is IR1, `sensorValues[1]` is IR2, and so on through IR5. Each value ranges from 0 to 1023, since the TLC1543 is a 10-bit ADC.

```cpp
unsigned int sensorValues[5];
ir.read(sensorValues);
```

## Quick Start

```cpp
#include <IRArray.h>

IRArray ir;
unsigned int sensorValues[5];

void setup() {
  Serial.begin(115200);
  ir.begin();
}

void loop() {
  ir.read(sensorValues);

  for (int i = 0; i < 5; i++) {
    Serial.print(sensorValues[i]);
    Serial.print('\t');
  }
  Serial.println();

  delay(100);
}
```

## Notes

- Higher values generally mean the sensor is seeing a more reflective surface (white), lower values mean a darker, less reflective surface (black), but always calibrate against your own track and lighting before relying on a fixed threshold.
- Do not use `analogRead()` on A0 to A4 for these sensors, they are not connected to the Arduino's own ADC at all, only to the TLC1543.
My name is Raj
