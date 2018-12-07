import random
from browser import document,html

def roll(sides=6):
	num_rolled = random.randint (1,sides)
	return num_rolled

def dice_1():
	print("---------")
	print("|       |")
	print("|   *   |")
	print("|       |")
	print("---------")
	document["dobbel"].clear()
	document["dobbel"] <= html.IMG(src="dice/dice1.png", height= 250)

def dice_2():
	print("---------")
	print("| *     |")
	print("|       |")
	print("|     * |")
	print("---------")
	document["dobbel"].clear()
	document["dobbel"] <= html.IMG(src="dice/dice2.png", height= 250)

def dice_3():
	print("---------")
	print("| *     |")
	print("|   *   |")
	print("|     * |")
	print("---------")
	document["dobbel"].clear()
	document["dobbel"] <= html.IMG(src="dice/dice3.png", height= 250)
def dice_4():
	print("---------")
	print("| *   * |")
	print("|       |")
	print("| *   * |")
	print("---------")
	document["dobbel"].clear()
	document["dobbel"] <= html.IMG(src="dice/dice4.png", height= 250)
def dice_5():
	print("---------")
	print("| *   * |")
	print("|   *   |")
	print("| *   * |")
	print("---------")
	document["dobbel"].clear()
	document["dobbel"] <= html.IMG(src="dice/dice5.png", height= 250)
def dice_6():
	print("---------")
	print("| *   * |")
	print("| *   * |")
	print("| *   * |")
	print("---------")
	document["dobbel"].clear()
	document["dobbel"] <= html.IMG(src="dice/dice6.png", height= 250)
def dice_7():
	print("---------  ---------")
	print("| *   * |  |       |")
	print("| *   * |  |   *   |")
	print("| *   * |  |       |")
	print("---------  ---------")

def dice_8():
	print("---------  ---------")
	print("| *   * |  | *     |")
	print("| *   * |  |       |")
	print("| *   * |  |     * |")
	print("---------  ---------")

def dice_9():
	print("---------  ---------")
	print("| *   * |  | *     |")
	print("| *   * |  |   *   |")
	print("| *   * |  |     * |")
	print("---------  ---------")

def main():
	sides = 6
	rolling = True
	while rolling:
		num_rolled = roll (sides)
		if num_rolled == 1:
			dice_1()
		elif num_rolled == 2:
			dice_2()
		elif num_rolled == 3:
			dice_3()
		elif num_rolled == 4:
			dice_4()
		elif num_rolled == 5:
			dice_5()
		elif num_rolled == 6:
			dice_6()
		elif num_rolled == 7:
			dice_7()
		elif num_rolled == 8:
			dice_8()
		elif num_rolled == 9:
			dice_9()

		print ("You rolled a", num_rolled)
		rolling = False
	print("Thanks for playing.")

document["dobbelsteen"].bind("click", main)