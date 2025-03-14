import styles from "./dado.module.css";

export function Dado(props){
    
    let url;
    
    switch(props.valor){
        case 1:
            url = "https://th.bing.com/th/id/R.35a1728654ce68f65e02d2c1661cf770?rik=0SUyTg9%2bRJDFvA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Hjcq2YDlHpk%2fUOQyD_vCb3I%2fAAAAAAAACwQ%2fVP1ky5LmKck%2fs1600%2fdado%2bface%2b1.JPG&ehk=74%2fjJAlw1jb00aaUJ62c5rLniHN8vtivt0bsuNZEW0c%3d&risl=&pid=ImgRaw&r=0";
            break;
        case 2:
            url = "https://th.bing.com/th/id/R.5857622af1a27ac6f9e172e0844e0b91?rik=j0XF5P%2ba%2f0PjGg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-5h6_2bTOj68%2fUOQyCECYwFI%2fAAAAAAAACwA%2fQajuH6tj-Fo%2fs1600%2fdado%2bdace%2b2.JPG&ehk=JwV8mWb%2beKcshkh4sapr16atKlDhRJ8Xxz7JqPSM990%3d&risl=&pid=ImgRaw&r=0";
            break;
        case 3:
            url = "https://th.bing.com/th/id/R.a9cedcd2930dd2c5871af6dd8834682f?rik=KNqlhbHSRTmhHg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-vKEXxjgqDB0%2fUOQyEx4kfKI%2fAAAAAAAACwY%2fzidx73Te-JM%2fs1600%2fdado%2bface%2b3.JPG&ehk=8ekCv34mofTxcU3yan6XB%2b4A6ikxkpAwT5T7qzIVHK0%3d&risl=&pid=ImgRaw&r=0";
            break;
        case 4:
            url = "https://th.bing.com/th/id/R.dde6de24731b523bfae0c2e8c5c2da84?rik=oZtU2sTAmhjcJw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-D_cvp4XuIWs%2fUOQyGECsCSI%2fAAAAAAAACwg%2fdo5LuqeEvSk%2fs1600%2fdado%2bface%2b4.JPG&ehk=AB0TDhqoVmMEcX545ZIpI%2fj3AED%2b5VQC29wUrf2GqaQ%3d&risl=&pid=ImgRaw&r=0";
            break;
        case 5:
            url = "https://th.bing.com/th/id/R.8a0111ccc2d8dea21f1e44510cbf4180?rik=tMZNhKSdbRRjrg&pid=ImgRaw&r=0";
            break;
        case 6:
            url = "https://th.bing.com/th/id/R.7728a5d516d5f71ecf0621dd623c527f?rik=F8mr%2bF%2f2bBPr7Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f-7H46mIX4HZY%2fUOQyC9vqUuI%2fAAAAAAAACwI%2fd3JUYZ9yfjs%2fs1600%2fdado%2bdace%2b6.JPG&ehk=ctAnQhIM1ZQewcTMUuZgsotAH6DbQo0j6THVj%2f2P9Nk%3d&risl=&pid=ImgRaw&r=0";
            break;

    }
    return (
        <div className={styles.div}> 
            <img src={url} alt="" className={styles.dado}/>
        </div>
    )
}