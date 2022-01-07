
type
    CPU* = object
        registers8*: array[18, uint8]
        registers16*: array[4, uint16]


proc A*(cpu: ptr CPU): uint8 =
    cpu.registers8[0]

