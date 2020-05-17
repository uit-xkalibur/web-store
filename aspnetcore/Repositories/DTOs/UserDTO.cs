namespace aspnetcore.Repositories.DTOs
{
    public class UserDTO
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public byte[] Password { get; set; }
        public string Role { get; set; }
        public string Fullname { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public bool RecordStatus { get; set; }
    }
}