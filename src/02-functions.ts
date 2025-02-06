import { Friend, Colleague } from './myTypes';
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