use std::convert::TryInto;

fn convert_to_matrix_coordinate(n: i32, col: i32) -> (usize, usize) {
    let i = n / col;
    let j = n % col;
    (i.try_into().unwrap(), j.try_into().unwrap())
}

impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        let row = matrix.len() as i32;
        let col = matrix[0].len() as i32;
        let count = row * col;

        let mut left = 0;
        let mut right = count;
        while left < right {
            let med = (left + right) / 2;
            let coordinate = convert_to_matrix_coordinate(med, col);
            let val = matrix[coordinate.0][coordinate.1];
            // println!("{:#?} {}", coordinate, val);
            if val < target {
                left = med + 1;
            } else if val > target {
                right = med;
            } else {
                return true;
            }
        }
        return false;
    }
}
