from turtle import*
width(3)
color("gray")
begin_fill()
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
end_fill()
penup()
goto(0, 50)
pendown()
right(90)
begin_fill()
forward(100)
right(90)
forward(100)
right(90)
forward(100)
end_fill()
penup()
goto(300, 50)
right(90)
pendown()
right(90)
begin_fill()
forward(100)
right(90)
forward(100)
right(90)
forward(100)
end_fill()
penup()
color("black")
goto(125, 0)
pendown()
begin_fill()
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
end_fill()
penup()
goto(25, 25)
pendown()
begin_fill()
left(180)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
end_fill()
penup()
goto(150, 50)
pendown()
begin_fill()
left(180)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
end_fill()
penup()
goto(50, 125)
pendown()
begin_fill()
left(180)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
end_fill()
penup()
goto(150, 125)
pendown()
begin_fill()
forward(25)
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
end_fill()
penup()
# goto(100, 200)
# forward(100)
# right(135)
# pendown()
# begin_fill()
# forward(141)

# penup()

# goto(100, 300)
# right(90)
# pendown()
# forward(141)

# end_fill()



# old route

penup()
goto(200,200)
left(45)
pendown()
begin_fill()
forward(141)
left(90)
forward(141)
end_fill()

# ^^^^^^^^^^^^ roof
penup()
goto(200,200)
right(90)
forward(70)
pendown()

begin_fill()

right(45)
forward(70)
right(90)
forward(150)
right(90)
forward(50)
right(90)
forward(150)

end_fill()

# ^^^^ flag shaping

goto(170, 270)
right(90)
# ^^^^ going to the initiating point of letter G
color("green") 

forward (40)
right(90)
forward(30)
right(90)
forward(15)

penup()
forward(25)
pendown()

right(180)
forward(10)
left(90)
forward(15)

# ^^^^ letter G

penup()
right(180)
forward(30)
right(90)
forward (10)
right(180)

pendown()


# ^^^^^^ going to the initiating coortinate of letter O

forward(40)
right(90)
forward(30)
right(90)
forward(40)
right(90)
forward(30)
right(90)

# ^^^^^^ shaping of the letter O

penup()

right(90) 
forward (45)

pendown()

# ^^^^^^ going to the initiating coortinate of letter A

left(90)
forward(40)
right(90)
forward(30)

right(90)
forward(40)

penup()
right(180)
forward(25)
pendown()


left(90)
forward(30)
















exitonclick()