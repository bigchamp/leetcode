/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const copyList1 = Array.from(list1);
    const copyList2 = Array.from(list2);
    let combinedArray = [...copyList1, ...copyList2];
    // combinedArray.push(...);
    let result = [];
    let min = 0;
    for (let i = 0; i < list1.length + list2.length; i++) {
        min = Math.min(...combinedArray);
        const arrayOfMin = combinedArray.filter((el) => el === min);
        result.push(...arrayOfMin);
        combinedArray = combinedArray.filter(el => el > min);
    }
    console.log('result', result);
    return new ListNode(result);
};


const list1 = [1, 2, 4]
const list2 = [1, 3, 4]

mergeTwoLists(list1, list2)


list1.push(...list2)

console.log(list1);