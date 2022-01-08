# This is just an example to get you started. You may wish to put all of your
# tests into a single file, or separate them into multiple `test1`, `test2`
# etc. files (better names are recommended, just make sure the name starts with
# the letter 't').
#
# To run these tests, simply execute `nimble test`.

import unittest
import z80
import z80/registers

template testRegister(r: proc, value: uint8): untyped =
  # default value
  check cpu.r == 0x00
  # Can set 8bit value
  cpu.r = value 
  check cpu.r == value



suite "z80 Registers":
  setup:
    var cpu = CPU()
  
  test "Main Register Set":
    testRegister A, 0xFF
    testRegister B, 0x85
    testRegister C, 0x1B
    testRegister D, 0x2E
    testRegister E, 0xCC
    testRegister H, 0x40
    testRegister L, 0x42

  test "Alternate Register Set":
    testRegister Aa, 0xFF
    testRegister Ba, 0x85
    testRegister Ca, 0x1B
    testRegister Da, 0x2E
    testRegister Ea, 0xCC
    testRegister Ha, 0x40
    testRegister La, 0x42