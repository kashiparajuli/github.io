describe("filter", function () {
    it("Banned word remover using filter",
        function () {
            assert.equal("The house is not nice!".filter('not'), "The house is nice!");
        });
});

describe("bubbleSort", function () {
    it("Returns the bubble sorted array",
        function () {
            assert.equal([6,4,0, 3,-2,1].bubbleSort().toString(),  [-2, 0, 1, 3, 4, 6].toString());
        });
});

describe("teach", function () {
    it("Returns the teacher name and his teaching course name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("Kashinath", 35);
            assert.equal(teacher.teach("WAP"),  `${teacher.name} is now teaching WAP`);
        });
});

