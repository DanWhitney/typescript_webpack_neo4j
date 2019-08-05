import {v1 as neo4j} from 'neo4j-driver'

interface IHomer {
  name(): String;
}


class Homer implements IHomer {
  name(){
      return 'Homer Simpson123';
  }
}
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j","p455word"));
const session = driver.session(neo4j.session.WRITE);

const cypher = "CREATE (stat:STAT:STR{value:11, mod:0} ) return stat"
session.run(cypher).then(res => console.log(`res ${res}`));






const instance = new Homer();
console.log(instance.name());