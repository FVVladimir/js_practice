import  {expect} from "chai";

const str = "test string";
const bln = true;
const num = 1203;

describe("test type variable",() => {
    
    it("first variable type srting", ()=> {
        expect(typeof(str)).to.equals('string')
    });

    it("second variable type boolean", () => {
        expect(typeof(bln)).to.equals('boolean')        
    });

    it("therd variable type number", () => {
        expect(typeof(num)).to.equals('number')        
    });
});