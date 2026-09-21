/**
 * Return the first ticket whose priority is "urgent" AND whose status is "open".
 * Return undefined when none qualifies.
 * Do not mutate tickets.
 */
export default function firstUrgentOpenTicket(tickets) {
  // Write your solution here.
    for(let i = 0; i < tickets.length; i++){
      if(tickets[i].priority == "urgent" && tickets[i].status == "open"){
          return tickets[i];
      }
    }
    return undefined;
}
