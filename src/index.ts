interface IHomer {
  name(): String;
}


class Homer implements IHomer {
  name(){
      return 'Homer Simpson123';
  }
}

const instance = new Homer();
console.log(instance.name());