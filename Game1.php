<?php

interface AbleToDig
{
    public function dig();
}

abstract class Character
{
    public $name;

    public function getName()
    {
        return "Hello, my name is " . $this->name . PHP_EOL;
    }

    public function __construct($name)
    {
        $this->name = $name;
    }


    public $str;
    public $dex;
    public $int;
    public $skills = array(
        "fishing" => 30,
        "mining" => 30,
        "lumberjacking" => 30);

    function GetSkills($key)
    {
        foreach ($this->skills as $key => $val) {
            $this->skills[$key] += 0.1;

        }
        return $this->skills[$key];
    }

    public $thingInHand;

    public function GetThingInHand()
    {
        return $this->thingInHand;
    }

    function SetThingInHand(Weapon $thingInHand)
    {
        $this->thingInHand = $thingInHand;
    }

    protected $counter = 0;

    protected function counterIncrement()
    {
        return ++$this->counter;
    }
}


class Dwarf extends Character implements AbleToDig
{

    public function dig()
    {
        $this->counterIncrement();
        if ($this->skills['mining'] >= 0 && $this->skills['mining'] <= 45) {
            $this->skills['mining'] += 0.1;
        } else if ($this->skills['mining'] >= 46 && $this->skills['mining'] <= 80 && $this->counter % 3 == 0) {
            $this->skills['mining'] += 0.1;
        } else if ($this->skills['mining'] >= 81 && $this->skills['mining'] <= 100 && $this->counter % 10 == 0) {
            $this->skills['mining'] += 0.1;
        }

        if ($this->thingInHand instanceof AbleToDig) {
            echo "I can dig" . PHP_EOL;
        } else {
            echo "I can't dig" . PHP_EOL;
        }
    }

}

class Human extends Character implements AbleToDig
{
    public function dig()
    {
        $this->counterIncrement();
        if ($this->skills['mining'] >= 0 && $this->skills['mining'] <= 45) {
            $this->skills['mining'] += 0.1;
        } else if ($this->skills['mining'] >= 46 && $this->skills['mining'] <= 80 && $this->counter % 3 == 0) {
            $this->skills['mining'] += 0.1;
        } else if ($this->skills['mining'] >= 81 && $this->skills['mining'] <= 100 && $this->counter % 10 == 0) {
            $this->skills['mining'] += 0.1;
        }
        if ($this->thingInHand instanceof AbleToDig) {
            echo "I can dig" . PHP_EOL;
        } else {
            echo "I can't dig" . PHP_EOL;
        }
    }

}

abstract class Weapon
{
    private $name;
    private $cost;
    private $attackPower = 20;
    private $strength = 50;

    public function getCost()
    {
        return $this->cost;
    }

    public function getStrength()
    {
        return $this->strength;
    }

    public function getAttackPower()
    {
        return $this->attackPower;
    }

    public function __construct()
    {
        $this->name = __CLASS__;
    }

}

class Pickaxe extends Weapon implements AbleToDig
{
    const POWER = 25;

    public function dig()
    {
        echo "This is my pickaxe! It can dig";
    }

}

class Shovel extends Weapon implements AbleToDig
{
    const POWER = 20;

    public function dig()
    {
        echo "This is my Showel! It can dig";
    }
}

class Katana extends Weapon
{
    const POWER = 100;
}


$Liza = new Human('Liza');
$weapon = new Pickaxe();
echo $Liza->getName();
$Liza->SetThingInHand($weapon);
$Liza->dig();

echo $Liza->GetSkills("fishing") . PHP_EOL;
echo $Liza->GetSkills("fishing") . PHP_EOL;
echo $Liza->GetSkills("fishing") . PHP_EOL;
echo $Liza->GetSkills("fishing") . PHP_EOL;




