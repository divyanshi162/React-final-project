export default function find(arr, i) {
  for (let ele of arr) {
    if (ele.id === i) return ele;
  }
}
