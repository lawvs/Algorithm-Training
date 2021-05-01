/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
  const m: Record<number, Employee> = {}
  for (const e of employees) {
    m[e.id] = e
  }

  let sum = 0
  const queue = [m[id]]
  while (queue.length) {
    const e = queue.shift()
    sum += e.importance
    queue.push(...e.subordinates.map((i) => m[i]))
  }
  return sum
}
