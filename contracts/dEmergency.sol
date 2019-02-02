pragma solidity >=0.4.26;

contract dEmergency {

    address private creator;

    struct Hospital{
        string location;
        string mobileNumber;
        uint hospitalCapacity;
        uint hospitalAvailability;
        uint speciality;
    }

    mapping(address => Hospital) HospitalInfo;
    mapping(string => address) HospitalLoc;
    mapping(address => address) PatientHospital;
    event InformHospital(address hospital, string location, string mobileNumber);
    event InformPatient(address hospital,string location, string mobileNumber);

    constructor() public payable {
        creator = msg.sender;

    }
    function getHospitalInfo(address _hospital) public returns(uint,uint){

        return (HospitalInfo[_hospital].hospitalAvailability,HospitalInfo[_hospital].hospitalCapacity);
    }

    function addHospital(address _hospital,string memory _location,string memory _mobileNumber,uint _hospitalCapacity,uint _hospitalAvailability,uint _speciality) public {
        require(msg.sender == creator);
        require(HospitalInfo[_hospital].hospitalCapacity ==0);
        HospitalInfo[_hospital] = Hospital(_location, _mobileNumber, _hospitalCapacity, _hospitalAvailability,_speciality);
        HospitalLoc[_location]=_hospital;

    }

    function addPatient(address _patient,string memory location,string memory _mobileNumber,uint _speciality,string memory name) public returns(bool) {

        address _hospital = HospitalLoc[location];

        require(HospitalInfo[_hospital].hospitalCapacity != 0);

        if(HospitalInfo[_hospital].hospitalAvailability > 0)
        {

            HospitalInfo[_hospital].hospitalAvailability -= 1;
            PatientHospital[_patient]=_hospital;

            //events triggered,for dagger
            emit InformPatient(_hospital,HospitalInfo[_hospital].location, HospitalInfo[_hospital].mobileNumber);
            emit InformHospital(_hospital, location, _mobileNumber);

          return true;


        }
        else
        {
        return false;
        }


    }


    function discharge(address _hospital) public{

        require(msg.sender == creator);

        HospitalInfo[_hospital].hospitalAvailability += 1;


    }

    function showPatientAllotment(address _patient) public returns(address){

        return PatientHospital[_patient];


    }














}
