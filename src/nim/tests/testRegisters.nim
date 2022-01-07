import std/unittest
import nim/z80

# import nim
# test "Register A":
#     check cpu.A == 0x55
#     check 4 == 5, "4 is not five silly"

suite "z80 CPU":

    setup:
        echo "setting up"
        # var
            # cpu = CPU()

    teardown:
        echo "tear down"

    test "Register A":
        # check cpu.A == 0x55
        check 4 == 5, "4 is not five silly"