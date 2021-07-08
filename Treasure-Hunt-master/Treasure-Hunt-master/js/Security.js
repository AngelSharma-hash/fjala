class Security {

    constructor(){

        // Add code to create the input and button elements

        this.access1 = createInput("Code1");
        this.access1.position(100,90);
        this.access1.style('background', 'white');

        this.access2 = createInput("Code2");
        this.access2.position(300,90);
        this.access2.style('background', 'white');

        this.access3 = createInput("Code3");
        this.access3.position(500,90);
        this.access3.style('background', 'white');

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background','lightgrey');

    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.access1.value())){
                //this.button1.hide();
                this.access1.hide();
                score=score+1;

            }
        })

        if(system.authenticate(accessCode2,this.access2.value())){
            //this.button1.hide();
            this.access2.hide();
            score=SCORE+1;

        }   
        
        if(system.authenticate(accessCode3,this.access3.value())){
            //this.button1.hide();
            this.access3.hide();
            score=SCORE+1;

        }   

    }
}