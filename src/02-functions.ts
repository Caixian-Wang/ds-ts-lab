import { Friend, Colleague, EmailContact } from './myTypes';
import { friends, colleagues } from './01-basics';

function older(f: Friend): string {
    return `${f.name} is now ${f.age + 1}`;
}

if (friends.length > 0) {
    console.log(older(friends[0]));
} else {
    console.log("No friends available");
}

function highestExtension(cs: Colleague[]): Colleague | null {
    if (cs.length === 0) return null;
    const result = [...cs].sort((c1, c2) => c1.contact.extension - c2.contact.extension);
    return result[result.length - 1];
}

const highestColleague = highestExtension(colleagues.current);
console.log(highestColleague ? highestColleague : "No colleagues available");

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW