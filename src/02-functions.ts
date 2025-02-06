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
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));