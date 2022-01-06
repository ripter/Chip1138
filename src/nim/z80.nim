
type
    CPU = object
        registers8*: array[18, uint8]
        registers16*: array[4, uint16]


when isMainModule: 
    doAssert 4 == 5, "four is five around here buddy"