package gsm.tierPredict.controller;

import gsm.tierPredict.dto.MemberDto;
import gsm.tierPredict.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@AllArgsConstructor
public class MemberController {
    private MemberService memberService;

    // 메인 페이지
    @GetMapping("/")
    public String index() {
        return "index";
    }

    // 회원가입 페이지
    @GetMapping("/user/signup")
    public String dispSignup() {
        return "SignUp";
    }

    // 회원가입 처리
    @PostMapping("/user/signup")
    public String execSignup(MemberDto memberDto) {
        memberService.joinUser(memberDto);

        return "redirect:/user/login";
    }

    // 로그인 페이지
    @GetMapping("/user/login")
    public String dispLogin() {
        return "Login";
    }

    // 발로란트 페이지
    @GetMapping("/user/Valorant")
    public String dispValorant(){
        return "Valorant";
    }
    // 롤 페이지
    @GetMapping("/user/LoL")
    public String dispLoL(){
        return "LoL";
    }

    @GetMapping("/user/overwatch")
    public String dispOverwatch(){
        return "overwatch";
    }

    @GetMapping("/user/result")
    public String dispresult(){
        return "result";
    }

    @GetMapping("/user/video_upload")
    public String dispVideo_upload(){
        return "video_upload";
    }

    @GetMapping("/user/TierPredict1")
    public String dispTierPredict1(){
        return "TierPredict1";
    }

    @GetMapping("/user/TierPredict2")
    public String dispTierPredict2(){
        return "TierPredict2";
    }

    @GetMapping("/user/TierPredict3")
    public String dispTierPredict3(){
        return "TierPredict3";
    }

    @GetMapping("/user/TierPredict4")
    public String dispTierPredict4(){
        return "TierPredict4";
    }

    @GetMapping("/user/TierPredict5")
    public String dispTierPredict5(){
        return "TierPredict5";
    }

    @GetMapping("/user/TierPredict6")
    public String dispTierPredict6(){
        return "TierPredict6";
    }

    @GetMapping("/user/TierPredict7")
    public String dispTierPredict7(){
        return "TierPredict7";
    }

    @GetMapping("/user/TierPredict8")
    public String dispTierPredict8(){
        return "TierPredict8";
    }

    @GetMapping("/user/TierPredict9")
    public String dispTierPredict9(){
        return "TierPredict9";
    }

    // 로그인 결과 페이지
    @GetMapping("/user/login/result")
    public String dispLoginResult() {
        return "/loginSuccess";
    }

    // 로그아웃 결과 페이지
    @GetMapping("/user/logout/result")
    public String dispLogout() {
        return "/logout";
    }

    // 접근 거부 페이지
    @GetMapping("/user/denied")
    public String dispDenied() {
        return "/denied";
    }

    // 내 정보 페이지
    @GetMapping("/user/info")
    public String dispMyInfo() {
        return "/myinfo";
    }

    // 어드민 페이지
    @GetMapping("/admin")
    public String dispAdmin() {
        return "/admin";
    }
}
