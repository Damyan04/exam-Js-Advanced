let expect=require('chai').expect;
class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}
describe('Unit test',function () {
    // it("should create an instance for ('testP, 100')", function name() {
    //     let p = new PaymentPackage("testP", 100);
    //
    //     expect(p instanceof PaymentPackage).to.be.true;
    // });
    it("should have correct values for ('test3', 60.5)", function name() {
        let p = new PaymentPackage('test3', 60.5);
//IMP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        expect(p.name).to.be.equal("test3");
        expect(p.value).to.equal(60.5);
        expect(p.VAT).to.equal(20);
        expect(p.active).to.equal(true);
        expect(p._active).to.equal(true);
        expect(p.VAT).to.be.greaterThan(1);
        expect(p._VAT).to.be.greaterThan(1);
        expect(p.value).to.be.greaterThan(50);
        expect(p._value).to.be.greaterThan(50);
    });
    it('Valid name test',function () {
        const t = new PaymentPackage('Gosho',800);
       expect(t.VAT).to.equal(20);
        expect(t.name).to.equal('Gosho');
        expect(t.active).to.equal(true);
        expect(t.value).to.equal(800);
    });
        it('',function () {
            const t = new PaymentPackage('Gosho',800);
            t.name='Pesho';
            expect(t.name).to.equal('Pesho');
            t.value=10000000000;
            expect(t.value).to.equal(10000000000);
            t.VAT=30;
            expect(t.VAT).to.equal(30);
            t.active=false;
            t.active=true;
            t.active=false;
            expect(t.active).to.equal(false);
            t.value=0;
            expect(t.value).to.equal(0);
            t.VAT=0;
            expect(t.VAT).to.equal(0);
            t.value=1.1;
            expect(t.value).to.equal(1.1);
            t.VAT=2.2;
            expect(t.VAT).to.equal(2.2);
        });



    it('Invalid test name',function () {
        const t = new PaymentPackage('Gosho',800);
        try {
            t.name=["Pesho"]
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');
        }
        try {
            t.name='';
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');
        }
        try {
            t.name=null;
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');
        }
        try {
            t.name=undefined;
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');
        }

    });
    it('Invalid value test',()=>{
        const t = new PaymentPackage('Gosho',800);
        try {
            t.value=-20
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            t.value=-20.2
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            t.value=2.3
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            t.value='Maria'
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            t.value=['Maria']
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            t.value=null
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            t.value=undefined
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            t.value='';
            t.value=20
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
    });
    it('Invalid Vat test',()=>{
        const t = new PaymentPackage('Gosho',800);
        try {
            t.VAT=-20
        } catch (e) {
            expect(e.message).to.equal('VAT must be a non-negative number');

        }
        try {
            t.VAT=-20.3
        } catch (e) {
            expect(e.message).to.equal('VAT must be a non-negative number');

        }
        try {
            t.VAT=2.3
        } catch (e) {
            expect(e.message).to.equal('VAT must be a non-negative number');

        }
        try {
            t.VAT='Maria'
        } catch (e) {
            expect(e.message).to.equal('VAT must be a non-negative number');

        }
    });
    it('Invalid active test',function () {
        const t = new PaymentPackage('Gosho',800);
        try {
            t.active=20
        } catch (e) {
            expect(e.message).to.equal('Active status must be a boolean');

        }
        try {
            t.active="Pesho"
        } catch (e) {
            expect(e.message).to.equal('Active status must be a boolean');

        }
        try {
            t.active=null
        } catch (e) {
            expect(e.message).to.equal('Active status must be a boolean');

        }
        try {
            t.active=undefined
        } catch (e) {
            expect(e.message).to.equal('Active status must be a boolean');

        }
    });
    it('toString valid',function () {
        const t= new PaymentPackage('HR Services', 1500);
        expect(t.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        t.VAT=30;
        expect(t.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 30%): 1950');
        t.active=false;
        expect(t.toString()).to.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 30%): 1950');
        t.name='Pesho';
        expect(t.toString()).to.equal('Package: Pesho (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 30%): 1950');
        t.value=1400;
        expect(t.toString()).to.equal('Package: Pesho (inactive)\n- Value (excl. VAT): 1400\n- Value (VAT 30%): 1820');
    });
    it('Inaccurate intial',function () {

        try {
            const t = new PaymentPackage();
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');

        }
        try {
            const t = new PaymentPackage('Gosho');
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            const t = new PaymentPackage(['Gosho'],30);
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');

        }
        try {
            const t = new PaymentPackage('Gosho',-30);
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            const t = new PaymentPackage('Gosho','Strinka');
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        const wrongPack = new PaymentPackage('Transfer Fee', 100);
        expect(wrongPack.name).to.equal('Transfer Fee')
        try {
            wrongPack.active = null;
        } catch(err) {
            expect(err.message).to.equal('Active status must be a boolean');

            }
        try {
            const t = new PaymentPackage({mame:'Hoo'},200);
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');

        }
        try {
            const t = new PaymentPackage({mame:'Hoo'});
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');

        }
        try {
            const t = new PaymentPackage({mame:'Hoo'},{val:30});
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');

        }
        try {
            const t = new PaymentPackage('Hoo',{val:30});
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
        try {
            const t = new PaymentPackage('Hoo',30);
            t.VAT={}
        } catch (e) {
            expect(e.message).to.equal('VAT must be a non-negative number');

        }
        try {
            const t = new PaymentPackage('',200);
        } catch (e) {
            expect(e.message).to.equal('Name must be a non-empty string');

        }
        try {
            const t = new PaymentPackage('a','');
        } catch (e) {
            expect(e.message).to.equal('Value must be a non-negative number');

        }
    });
    it('',function () {
        const packages = [
            new PaymentPackage('HR Services', 1500),
            new PaymentPackage('Consultation', 800),
        ];
        expect(packages.join('\n')).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800\nPackage: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960')


    })


});
