# import this file by writing ``import z80/registers``. 
import z80

template register(name: untyped, index: Natural): untyped =
  proc name*(cpu: CPU): uint8 =
    cpu.registers8[index]

  proc `name=`*(cpu: var CPU, value: uint8) =
    cpu.registers8[index] = value;


#[
  18 8bit registers
]#
register A, 0
register B, 1
register C, 2
register D, 3
register E, 4
register H, 5
register L, 6
register Aa, 7
register Ba, 8
register Ca, 9
register Da, 10
register Ea, 11
register Ha, 12
register La, 13
# register B, 14
# register B, 15
# register B, 16
# register B, 17