import LinkedList from "../code/LinkedList";
import { test_list } from "./ListTest";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
