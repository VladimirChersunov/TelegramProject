package itstep.thesis.telegram.models.ChannelModel;

import java.util.HashSet;
import java.util.Set;

import itstep.thesis.telegram.models.MessageModel.Message;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "channels") // модель канала состоит из инфо канала и сообщений
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "channelImage")
    private String channelImage;

    @Column(name = "channelName", length = 50)
    private String channelName;

    @Column(name = "aboutChannel", length = 500)
    private String aboutChannel;

    @Column(name = "channelSubscribers")
    private Long channelSubscribers;

    @Column(name = "channelLink", length = 50)
    private String channelLink;

    @Column(name = "notificationStatus")
    private Boolean notificationStatus;

    @Column(name = "isBlocked")
    private Boolean isBlocked;
    
    

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    // канал может состоять из множества сообщений, и сообщение может быть в
    // множестве каналов
    @JoinTable(name = "channel_message", joinColumns = { @JoinColumn(name = "channel_id") }, inverseJoinColumns = {
            @JoinColumn(name = "message_id") })
    private Set<Message> messages = new HashSet<>();

   

}
