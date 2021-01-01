type maxStack []int

func Stack() maxStack {
  s := make(maxStack, 0)
  return s
}

func (s *maxStack) IsEmpty() bool {
  return len(*s) == 0
}

func (s *maxStack) Push(v int) {
  *s = append(*s, v)
}

func (s *maxStack) Top() (int, error) {
  if s.IsEmpty() {
    return 0, fmt.Errorf("Error: Stack is empty")
  }
  return (*s)[len(*s) - 1], nil
}

func (s *maxStack) Bottom() (int, error) {
  if s.IsEmpty() {
    return 0, fmt.Errorf("Error: Stack is empty")
  }
  return (*s)[0], nil
}

func (s *maxStack) Pop() (int, error) {
  res, err := s.Top()
  if err != nil {
    return 0, err
  }
  *s = (*s)[:len(*s) - 1]
  return res, nil
}

func (s *maxStack) Shift() (int, error) {
  res, err := s.Bottom()
  if err != nil {
    return 0, err
  }
  *s = (*s)[1:]
  return res, nil
}

func (s *maxStack) MaxPush(v int) {
  if s.IsEmpty() {
    s.Push(v)
    return
  }
  for true {
    top, _ := s.Top()
    if s.IsEmpty() || top >= v {
      break
    }
    s.Pop()
  }
  s.Push(v)
}

func (s *maxStack) MaxShift(v int) {
  if s.IsEmpty() {
    return
  }
  btm, _ := s.Bottom()
  if v == btm {
    s.Shift()
  }
}


func maxSlidingWindow(nums []int, k int) []int {
  s := Stack()
  ans := make([]int, 0, len(nums) - k + 1)
  for i := 0; i < k; i++ {
    s.MaxPush(nums[i])
  }
  // fmt.Println(s)
  btm, _ := s.Bottom()
  ans = append(ans, btm)

  for i := k; i < len(nums); i++ {
    s.MaxShift(nums[i - k])
    s.MaxPush(nums[i])
    btm, _ := s.Bottom()
    ans = append(ans, btm)
    // fmt.Println(s)
  }

  return ans
}
