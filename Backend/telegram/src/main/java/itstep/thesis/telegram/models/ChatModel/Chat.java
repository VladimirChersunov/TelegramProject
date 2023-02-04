package itstep.thesis.telegram.models.ChatModel;

import java.util.HashSet;
import java.util.Set;

import itstep.thesis.telegram.models.MessageModel.Message;
import itstep.thesis.telegram.models.UserModel.User;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "chats")
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)    
    @JoinColumn(name = "user_id")
    private User user;   
    
    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinTable(name = "chat_message", joinColumns = { @JoinColumn(name = "chat_id") }, inverseJoinColumns = {
            @JoinColumn(name = "message_id") })
    private Set<Message> messages = new HashSet<>();
    
}
