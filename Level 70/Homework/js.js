function matrix_length_output(matrix){
    let counter_width = matrix[0].length;
    let counter_height = matrix.length;
    let height_power_two = counter_height ** 2;
    let width_power_two = counter_width ** 2;
    let counter_diagonal_to_be_square_rooted = height_power_two + width_power_two; 
    let counter_diagonal = Math.sqrt(counter_diagonal_to_be_square_rooted); 

    let outputter = console.log("width: "+ counter_width + " height: " + counter_height + " diagonal: " + counter_diagonal)
     
}
matrix_length_output(
    [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
]
    );