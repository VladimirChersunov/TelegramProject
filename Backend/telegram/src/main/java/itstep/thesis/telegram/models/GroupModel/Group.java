package itstep.thesis.telegram.models.GroupModel;

import java.util.HashSet;
import java.util.Set;

import itstep.thesis.telegram.models.MessageModel.Message;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "groups")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   
  
  
    @Column(name = "pinnedMessage")
    private Long pinnedMessage;

    @Column(name = "groupImage")
    private String groupImage;

    @Column(name = "groupName", length = 50)
    private String groupName;

    @Column(name = "aboutGroup", length = 500)
    private String aboutGroup;

    @Column(name = "groupSubscribers")
    private Long groupSubscribers;

    @Column(name = "groupLink", length = 50)
    private String groupLink;

    @Column(name = "notificationStatus")
    private Boolean notificationStatus;

    @Column(name = "isBlocked")
    private Boolean isBlocked;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinTable(name = "group_message", joinColumns = { @JoinColumn(name = "group_id") }, inverseJoinColumns = {
            @JoinColumn(name = "message_id") })
    private Set<Message> messages = new HashSet<>();

    @ManyToOne(cascade = CascadeType.ALL)    
    @JoinColumn(name = "members_id")
    private Members members;

    

    
}
