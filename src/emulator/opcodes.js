app.service('opcodes', [function() {
    var opcodes = {
        NONE: 0,
        RESERVED_1: 1,
        LD_ADDRESS_TO_REG: 2,
        LD_REGADDRESS_TO_REG: 3,
        SD_REG_TO_ADDRESS: 4,
        SD_REG_TO_REGADDRESS: 5,
        LD_NUMBER_TO_REG: 6,
        RESERVED_2: 7,
        RESERVED_3: 8,
        ADD_REG_TO_REG: 10,
        ADD_REGADDRESS_TO_REG: 11,
        ADD_ADDRESS_TO_REG: 12,
        ADD_NUMBER_TO_REG: 13,
        SUB_REG_FROM_REG: 14,
        SUB_REGADDRESS_FROM_REG: 15,
        SUB_ADDRESS_FROM_REG: 16,
        SUB_NUMBER_FROM_REG: 17,
        INC_REG: 18,
        DEC_REG: 19,
        JMP: 30,
        JZ: 31,
        JNZ: 32,
        JGZ: 33,
        JGEZ: 34,
        JLZ: 35,
        JLEZ: 36,
        PUSH_REG: 50,
        PUSH_REGADDRESS: 51,
        PUSH_ADDRESS: 52,
        PUSH_NUMBER: 53,
        POP_REG: 54,
        CALL_REGADDRESS: 55,
        CALL_ADDRESS: 56,
        RET: 57,
        MUL_REG: 60,
        MUL_REGADDRESS: 61,
        MUL_ADDRESS: 62,
        MUL_NUMBER: 63,
        DIV_REG: 64,
        DIV_REGADDRESS: 65,
        DIV_ADDRESS: 66,
        DIV_NUMBER: 67,
        AND_REG_WITH_REG: 70,
        AND_REGADDRESS_WITH_REG: 71,
        AND_ADDRESS_WITH_REG: 72,
        AND_NUMBER_WITH_REG: 73,
        OR_REG_WITH_REG: 74,
        OR_REGADDRESS_WITH_REG: 75,
        OR_ADDRESS_WITH_REG: 76,
        OR_NUMBER_WITH_REG: 77,
        XOR_REG_WITH_REG: 78,
        XOR_REGADDRESS_WITH_REG: 79,
        XOR_ADDRESS_WITH_REG: 80,
        XOR_NUMBER_WITH_REG: 81,
        NOT_REG: 82,
        SHL_REG_WITH_REG: 90,
        SHL_REGADDRESS_WITH_REG: 91,
        SHL_ADDRESS_WITH_REG: 92,
        SHL_NUMBER_WITH_REG: 93,
        SHR_REG_WITH_REG: 94,
        SHR_REGADDRESS_WITH_REG: 95,
        SHR_ADDRESS_WITH_REG: 96,
        SHR_NUMBER_WITH_REG: 97
    };

    return opcodes;
}]);
