pragma solidity ^0.4.2;

contract Token {
    string  public name = "Token";
    string  public symbol = "TK";
    string  public standard = "Token v1.0";
    uint public totalSupply = 1000000;
    address admin;

    mapping(address => uint) public balanceOf;

    function Token () public {
        admin = msg.sender;
        balanceOf[msg.sender] = 1000000;
    }

    function transfer(address _to, uint _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        return true;
    }
}