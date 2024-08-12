function prepareSimpleIndomie(obj) {
    /*  console.log(
      `adding ${obj.indomie} indomie with ${obj.indomie} cup of water inside a pot`
    );
    setTimeout(() => {
      console.log("placing the pot on a heat source");
    }, 1000 * 2);
    setTimeout(() => {
      console.log("boiling...");
    }, 1000 * 2.1);
  
    setTimeout(() => {
      console.log(`adding the following spices: ${obj.spices.join()} `);
    }, 1000 * 60 * (2.1 + 3));
    setTimeout(() => {
      console.log(`stiring... `);
    }, 1000 * 60 * (2.2 + 3.1));
    setTimeout(() => {
      console.log("boiling...");
    }, 1000 * 60 * (2.2 + 3.2));
    setTimeout(() => {
      console.log(`Indomie is ready! `);
    }, 1000 * 60 * (2.2 + 3.1 + 3));
    setTimeout(() => {
      console.log("please put in a plate serve and enjoy your meal");
    }, 1000 * 60 * (2.2 + 3.1 + 3.1)); */
    let counter = 0;
    let id = setInterval(() => {
      counter += 1;
      if (counter < 2) {
        console.log(
          `adding ${obj.indomie} indomie with ${obj.indomie} cup of water inside a pot`
        );
      }
      if (counter > 2 && counter <= 60 * 3) {
        // console.log(`boiling for ${counter} seconds`);
        console.log("boiling...");
      }
      if (counter > 60 * 3.1 && counter < 60 * 3.2) {
        console.log(`adding the following spices: ${obj.spices.join()} `);
      }
      if (counter > 60 * 3.2 && counter < 60 * 3.3) {
        console.log(`stiring... `);
      }
      if (counter > 60 * 3.3 && counter <= 60 * 4.8) {
        // console.log(`boiling for ${counter} seconds`);
        console.log("boiling...");
      }
      if (counter >= 60 * 4.9) {
        console.log(`Indomie is ready! `);
      }
  
      if (counter === 60 * 5) {
        console.log("please put in a plate serve and enjoy your meal");
        clearInterval(id);
      }
      // console.log(`${counter} seconds`);
    }, 1000);
  }
  prepareSimpleIndomie({
    indomie: 1,
    spices: ["default", "onion", "fresh pepe", "egg"],
  });