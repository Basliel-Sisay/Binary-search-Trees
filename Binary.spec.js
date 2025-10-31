const { Tree, Solution } = require('./Binary'); 
describe('Binary Search Tree', function() {
  let tree;
  let solution;
  beforeEach(function() {
    tree = new Tree([5, 3, 7, 2, 4, 6, 8]);
    solution = new Solution();
  });
  test('in-order traversal returns sorted values', function() {
    const result = solution.inorderTraversal(tree.root);
    expect(result).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });
  test('pre-order traversal returns correct sequence', function() {
    const result = solution.preOrderTraversal(tree.root);
    expect(result[0]).toBe(5); 
  });
  test('post-order traversal ends with root', function() {
    const result = solution.postOrderTraversal(tree.root);
    expect(result[result.length - 1]).toBe(5);
  });
});